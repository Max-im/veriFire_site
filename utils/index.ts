export const getPrices = () => {
    return [
        {
          title: 'Basic',
          description:
            'Verify up to 100 email addresses per month. Perfect for small lists, students, or hobbyists.',
          price: 'Free',
          salesPrice: null,
          credits: 100,
        },
        {
          title: 'Standard',
          description:
            'Verify up to 500 email addresses per month. Ideal for small businesses, entrepreneurs, or marketers.',
          price: '12.99',
          salesPrice: '9.99',
          credits: 500,
        },
        {
          title: 'Premium',
          description:
            'Verify up to 2000 email addresses per month. Suitable for large businesses, agencies, or organizations.',
          price: '29.99',
          salesPrice: '24.99',
          credits: 2000,
        },
      ];
} 