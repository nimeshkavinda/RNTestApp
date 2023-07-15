const rules = {
  email: {
    required: 'Email address is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email address is invalid',
    },
  },
  password: {
    required: 'Password is required',
  },
};

export default rules;
