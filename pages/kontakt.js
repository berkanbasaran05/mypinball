import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Contact = () => {
  return (
    <Layout pageName={"Kontakt"}>
      <PageBanner pageName={"Kontakt"} />
      <div className="neoh_fn_contact_page">
        <div className="container">
          <div className="mw_500">
            <form
              action="/"
              method="post"
              className="contact_form"
              id="contact_form"
              autoComplete="off"
            >
              <div className="input_list">
                <ul>
                  <li>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Your Name" />
                  </li>
                  <li>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="text"
                      placeholder="youremail@mail.com"
                    />
                  </li>
                  <li>
                    <label htmlFor="subject">Subjekt</label>
                    <input id="subject" type="text" />
                  </li>
                  <li>
                    <label htmlFor="message">Nachricht</label>
                    <textarea id="message" defaultValue={""} />
                  </li>
                  <li>
                    <a
                      id="send_message"
                      href="#"
                      className="neoh_fn_button only_text"
                    >
                      <span className="text">Senden Sie</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="returnmessage"
                data-success="Your message has been received, We will contact you soon."
              />
              <div className="empty_notice">
                <span>Please Fill Required Fields</span>
              </div>
            </form>
            <div className="desc_holder"></div>
            <div className="info_list">
              <ul>
                <li>
                  <p className="label">Adresse</p>
                  <h3 className="value">59872 Meschede</h3>
                </li>
                <li>
                  <p className="label">Telefon</p>
                  <h3 className="value">
                    <a href="tel:+4915161038717">(+49 )151 610 38 717</a>
                  </h3>
                </li>
                <li>
                  <a href="mailto:info@mypinball.eu" className="email">
                    info@mypinball.eu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
