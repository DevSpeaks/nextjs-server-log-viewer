import logger from '../../lib/logger';

export default function handler(req, res) {
  // Log a simple info message
  logger.info('API /hello was accessed');

  // Example error-level log
  const isError = true;
  if (isError) {
    logger.error('An error occurred in /hello endpoint');
  }

  res.status(200).json({ message: 'Hello from Next.js + Errsole + MySQL!' });
}