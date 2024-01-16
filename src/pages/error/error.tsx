import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorText } from '@shared/ui';

export const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    const message = error.data instanceof Error ? error.data.message : '';
    return (
      <ErrorText
        message={message}
        statusCode={error.status}
        statusText={error.statusText}
      />
    );
  }

  return <ErrorText />;
};
