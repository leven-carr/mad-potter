import { useState } from "react";
import FormInputField from "@/components/ui/FormInputField";
import FormSelectField from "@/components/ui/FormSelectField";
import FormTextField from "@/components/ui/FormTextField";
import FormButton from "@/components/ui/FormButton";
import FormSuccessModal from "./FormSuccessModal";

function ContactForm() {
  // Form state - holds the form data
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    "bot-field": "",
  });

  // Errors state - holds the error messages
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Submitting state - used to disable button during network request
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal state - tracks whether success modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update form state and error state as soon as the user changes a given input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    // Validate name - cannot be empty or just spaces
    if (!formState.name.trim()) {
      newErrors.name = "Please enter your name";
      isValid = false;
    }

    // Validate email - must conform to HTML5-like email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate phone number - must conform to regex for US phone number
    const phoneRegex = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
    if (!phoneRegex.test(formState.phone)) {
      newErrors.phone = "Please enter a valid US phone number";
      isValid = false;
    }

    // Validate subject
    if (!formState.subject) {
      newErrors.subject = "Please select a subject";
      isValid = false;
    }

    // Validate message - must be at least 10 characters
    if (!formState.message.trim()) {
      newErrors.message = "Please enter a message";
      isValid = false;
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Please enter at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (formState["bot-field"]) return;

    setIsSubmitting(true);

    // Prepare JSON payload with your Web3Forms access key
    const payload = {
      access_key: "1ac92e3d-77c6-480e-b6fd-97a56fe230a1",
      ...formState,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsModalOpen(true);
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          "bot-field": "",
        });
      } else {
        alert("Form submission failed: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      alert("Form submission failed: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full max-w-xl flex-col gap-4 rounded-2xl border-2 border-ink-base/15 bg-canvas-light p-6 shadow-lg"
      >
        {/* Honeypot spam field */}
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you're human:
            <input
              name="bot-field"
              value={formState["bot-field"]}
              onChange={handleChange}
            />
          </label>
        </p>

        <FormInputField
          label="Name"
          name="name"
          placeholder="Your name"
          value={formState.name}
          onChange={handleChange}
          errorMsg={errors.name}
        />

        <FormInputField
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Your phone number"
          value={formState.phone}
          onChange={handleChange}
          errorMsg={errors.phone}
        />

        <FormInputField
          label="Email"
          name="email"
          type="email"
          placeholder="Your email address"
          value={formState.email}
          onChange={handleChange}
          errorMsg={errors.email}
        />

        <FormSelectField
          value={formState.subject}
          errorMsg={errors.subject}
          onChange={(val) => {
            setFormState({ ...formState, subject: val });
            if (errors.subject) setErrors({ ...errors, subject: "" });
          }}
        />

        <FormTextField
          value={formState.message}
          onChange={handleChange}
          errorMsg={errors.message}
        />

        <FormButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </FormButton>
      </form>

      <FormSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default ContactForm;
