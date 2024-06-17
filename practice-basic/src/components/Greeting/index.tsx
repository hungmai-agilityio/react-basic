import { useState, useEffect } from 'react';

// Constants
import { MESSAGE_GREETING } from '@/constants/message';

const Greeting = () => {
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    let message;

    if (currentHour < 10) {
      message = MESSAGE_GREETING.MORNING;
    } else if (currentHour < 20) {
      message = MESSAGE_GREETING.DAY;
    } else {
      message = MESSAGE_GREETING.EVENING;
    }

    setGreeting(message);
  }, []);

  return <p className="text-xxl font-semibold">{greeting}</p>;
};

export default Greeting;
