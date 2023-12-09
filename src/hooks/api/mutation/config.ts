export const HEADERS_INIT = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const POST_REQUEST_INIT: RequestInit =
  {
    method: 'POST',
    ...HEADERS_INIT,
  };

export const PUT_REQUEST_INIT: RequestInit =
  {
    method: 'PUT',
    ...HEADERS_INIT,
  };

export const OPTIONS_INIT: RequestInit =
  POST_REQUEST_INIT;
