export const logEvent = (eventName, data) => {
  const timestamp = new Date().toISOString();
  console.log(`[Logger] ${eventName}`, { timestamp, ...data });

  };