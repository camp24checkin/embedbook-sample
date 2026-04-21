# Camp24 Booking Integration

This project demonstrates an elegant implementation of Camp24's booking system using Next.js, React, and Headless UI Dialog component.

## Overview

The integration provides a modern, responsive booking experience with a modal dialog implementation. This approach enhances user experience by maintaining context while making reservations.

## Base URL and Configuration

```
Base URL: https://ifra.camp24checkin.de
Example Areal ID: u0ukj94zwwp3
```

## Implementation Examples

### Basic iframe Implementation

```html
<iframe
  src="https://ifra.camp24checkin.de/de?id=u0ukj94zwwp3"
  height="{800}"
  width="100%"
/>
```

### Advanced Implementation with Dialog (Recommended)

This implementation uses Headless UI's Dialog component to create a modal experience:

```tsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function BookingComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="your-button-styles">
        Book Now
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-[90vw] h-[90vh] transform overflow-hidden rounded-2xl bg-white/90 shadow-xl transition-all">
                  <iframe
                    src="https://ifra.camp24checkin.de/de?id=u0ukj94zwwp3"
                    className="w-full h-full bg-transparent"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
```

## Features

- 🎯 Modal dialog implementation for better user experience
- 🎨 Smooth transitions and animations
- 📱 Fully responsive design
- 🖥️ Backdrop blur effect for modern UI
- ⌨️ Keyboard accessibility
- 🔒 Focus trap management
- 🎭 Clean transition animations

## Dependencies

```json
{
  "@headlessui/react": "^2.2.1",
  "next": "15.3.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

## Installation

1. Install the required dependencies:

```bash
npm install @headlessui/react
# or
yarn add @headlessui/react
```

2. Import and use the booking component in your project.

## Best Practices

- Use the Dialog implementation for better user experience
- Ensure proper z-index management for the modal
- Implement loading states if needed
- Handle errors appropriately
- Test across different devices and screen sizes

## Browser Support

The implementation is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

---

For more information about Camp24 integration, visit [Camp24 Sample](https://camp24checkinsample.vercel.app/).
