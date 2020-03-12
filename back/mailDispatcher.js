const mandrill = require("mandrill-api/mandrill");
let mandrillApi = "DUTOT9P7xFrZRlzp1hLnWA";
let mandrill_client = new mandrill.Mandrill(mandrillApi);

//exports.send = (name, email, type, subject, date = "") => {
exports.sendTemplateConfirmation = () => {
  let message = {
    subject: "Confirmation of your Purchase!",
    from_email: "no-reply@insideone.com.ar",
    from_name: "Flyapp",
    to: [
      {
        email: "alexgabrielk@gmail.com",
        type: "to"
      }
    ],
    headers: {
      "Reply-To": "no-reply@flyapp.com"
    }
  };
  let async = false;
  let ip_pool = "Main Pool";

  mandrill_client.messages.sendTemplate({
    message: message,
    async: async,
    ip_pool: ip_pool,
    template_name: "mail-buy-confirmation-flyapp",
    template_content: [{ name: "NAME", content: "test" }]
  });
};

exports.sendTemplateSent = () => {
  let message = {
    subject: "Your Experience was Sent!",
    from_email: "no-reply@insideone.com.ar",
    from_name: "Flyapp",
    to: [
      {
        email: "alexgabrielk@gmail.com",
        type: "to"
      }
    ],
    headers: {
      "Reply-To": "no-reply@flyapp.com"
    }
  };
  let async = false;
  let ip_pool = "Main Pool";

  mandrill_client.messages.sendTemplate({
    message: message,
    async: async,
    ip_pool: ip_pool,
    template_name: "mail-buy-sent-flyapp",
    template_content: [{ name: "NAME", content: "test" }]
  });
};

exports.sendTemplateCompleted = () => {
  let message = {
    subject: "Your Experience was Delivered",
    from_email: "no-reply@insideone.com.ar",
    from_name: "Flyapp",
    to: [
      {
        email: "alexgabrielk@gmail.com",
        type: "to"
      }
    ],
    headers: {
      "Reply-To": "no-reply@flyapp.com"
    }
  };
  let async = false;
  let ip_pool = "Main Pool";

  mandrill_client.messages.sendTemplate({
    message: message,
    async: async,
    ip_pool: ip_pool,
    template_name: "mail-buy-completed-flyapp",
    template_content: [{ name: "NAME", content: "test" }]
  });
};
