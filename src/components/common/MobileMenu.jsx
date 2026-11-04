import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  CloseButton,
} from "@headlessui/react";
import NavLinkItem from "./NavLinkItem";

function MobileMenu({ isOpen, onClose, links }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative md:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-ink-deep/30 backdrop-blur-xs transition-opacity duration-450 data-closed:opacity-0"
      />

      <div className="fixed inset-0">
        <DialogPanel
          as="nav"
          aria-label="Mobile menu"
          transition
          className="fixed top-15 right-0 bottom-0 -mt-0.5 flex w-full max-w-56 flex-col items-center gap-6 bg-brand-primary px-10 py-6 text-center text-lg text-brand-secondary transition duration-450 data-closed:translate-x-full"
        >
          {links.map((item) => (
            <NavLinkItem
              key={item.to}
              link={item}

              onClick={onClose}
              className={({ isActive }) =>
                isActive ? "text-brand-active hover:text-brand-hover" : ""
              }
            />
          ))}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default MobileMenu;
