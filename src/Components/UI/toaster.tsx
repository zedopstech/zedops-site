"use client";
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(
        ({ id, title, description, action, ...props }) => (
          <Toast
            key={id}
            {...props}
            className={`p-4 rounded-lg shadow-lg border-l-5  bg-white text-black `}
          >
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-white" />
          </Toast>
        )
      )}
      <ToastViewport />
    </ToastProvider>
  );
}
