import Mailer from 'react-native-smtp-mailer';

export const sendEmailNotification = (profile, type) => {
  const greeting = `Greeting ${profile.name},`;
  let subject = '';
  let body = '';

  switch (type) {
    case 'created':
      subject = 'Profile Notification #Created';
      body = `${greeting} we are glad to inform you that your staff profile has been created.`;
      break;
    case 'updated':
      subject = 'Profile Notification #Edited';
      body = `${greeting} we are glad to inform you that your staff profile has been updated.`;
      break;
    case 'deleted':
      subject = 'Profile Notification #Deleted';
      body = `${greeting} we are sad to inform you that your staff profile has been deleted.`;
      break;
    default:
      break;
  }

  Mailer.mail({
    subject,
    recipients: [profile.email],
    body,
    isHTML: true,
  });
};
