import { useState } from "react";
import FormInputField from "./FormInputField";
import FormSelectField from "./FormSelectField";
import FormMessageField from "./FormMessageField";
import FormBtn from "./FormBtn";
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

  // Modal state - tracks whether success modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Encode form data into Netlify-readable URL format
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (formState["bot-field"]) return;

    // --- LOCAL TEST MOCK ---
    console.log("Mocking successful submission locally!");
    setIsModalOpen(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      "bot-field": "",
    });
    return;

    // Submit to Netlify
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...formState }),
    // })
    //   .then(() => {
    //     setIsModalOpen(true);
    //     setFormState({
    //       name: "",
    //       email: "",
    //       phone: "",
    //       subject: "",
    //       message: "",
    //       "bot-field": "",
    //     });
    //   })
    //   .catch((error) => alert("Form submission failed: " + error));
  };

  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full max-w-xl flex-col gap-4 rounded-2xl border-2 border-ink-base/15 bg-canvas-light p-6"
      >
        {/* Netlify ID field */}
        <input type="hidden" name="form-name" value="contact" />

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

        <FormMessageField
          value={formState.message}
          onChange={handleChange}
          errorMsg={errors.message}
        />

        <FormBtn type="submit">Send Message</FormBtn>
      </form>

      <FormSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default ContactForm;
