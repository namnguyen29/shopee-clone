import { toast, ToastContent } from 'react-toastify';

export const errorToast = (content: ToastContent<unknown>) => toast.error(content);

export const successToast = (content: ToastContent<unknown>) => toast.success(content);
