import { toast, ToastContent } from 'react-toastify';

export const errorToast = <T>(content: ToastContent<T>) => toast.error(content);

export const successToast = (content: ToastContent<unknown>) => toast.success(content);
