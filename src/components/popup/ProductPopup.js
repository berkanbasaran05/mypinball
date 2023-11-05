import { TicketIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const ProductPopup = ({ open, close, img, title, dec }) => {
  return (
    <Fragment>
      <div className={`neoh_fn_modal product_modal ${open ? "opened" : ""}`}>
        <div className="modal_in">
          <div className="modal_closer">
            <a onClick={() => close()}>
              <img src="svg/cancel.svg" alt="" className="fn__svg" />
            </a>
          </div>
          <div className="modal_content">
            <div className="neoh_fn_product_modal">
              <div className="img_item">
                <img src={img} />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">{title}</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                    {dec
                      ? dec
                      : `Suspendisse eu velit est. Cras nec vestibulum quam. Donec
                    tincidunt purus nec enim tincidunt, sit amet facilisis massa
                    laoreet. Integer mollis nec sapien eu lacinia.`}
                  </p>
                </div>
                <div className="buttons items-center">
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <TicketIcon className="w-6 h-6 text-white" />
                    </span>
                    <span className="text">Mieten</span>
                  </a>
                  <span className=" text-brand-turquoise-primary ">
                    {" "}
                    mieten ab € 160{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductPopup;
