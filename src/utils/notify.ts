import { notification } from 'antd';

type NotifyType = 'success' | 'error' | 'info' | 'warning';

interface NotifyOptions {
  message: string;
  description?: string;
}

export const notify = (type: NotifyType, options: NotifyOptions) => {
  notification[type]({
    message: options.message,
    description: options.description,
    placement: 'topRight',
    duration: 3,
  });
};
