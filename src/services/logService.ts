type LogEntry = {
    timestamp: string;
    message: string;
  };
  
  let logEntries: LogEntry[] = [];
  
  const logService = {
    log: (message: string) => {
      const entry: LogEntry = {
        timestamp: new Date().toISOString(),
        message: message
      };
      logEntries.push(entry);
    },
    getLogs: () => logEntries
  };
  
  export default logService;
  