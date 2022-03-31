// @flow
import * as React from "react";
import { FiMail } from "react-icons/fi";
import { BsTelephoneForward, BsFacebook } from "react-icons/bs";
export function Fooder() {
  return (
    <div className="fooder row">
      <div class="col-lg-4 col-md-4">
        <h3>OFFICES :</h3>
        <br />
        <h5 className="titleContact">HA NOI OFFICE:</h5>
        <p className="content_fooder">
          6TH FLOOR, LOT A1, IPH BUILDING, NO. 241 XUAN THUY, DICH VONG HAU
          WARD, CAU GIAY DIST., HANOI CITY, VIETNAM.
        </p>
        <h5 className="titleContact">HAIDUONG OFFICE:</h5>
        <p className="content_fooder">
          262TH QUANG TRUNG STREET, QUANG TRUNG COMMUNE, HAI DUONG CITY, HAI
          DUONG PROVICE, VIETNAM.
        </p>
      </div>
      <div class="col-lg-4 col-md-4">
        <h3>CONTACT :</h3>
        <br />
        <h5 className="titleContact">Please contact the HR Department:</h5>
        <br />
        <p className="content_fooder email">
          <FiMail /> : infor@yuhichy.com <br />
          <br />
          <BsTelephoneForward /> : + 84. 345.155.711
          <br />
          <br />
          <BsFacebook /> :{" "}
          <a
            className="linkFace"
            href="https://www.facebook.com/LOGISTICS.YUHICHY"
            target="_blank"
          >
            https://www.facebook.com/LOGISTICS.YUHICHY
          </a>
        </p>
      </div>
      <div class="col-lg-4 col-md-4">
        <h3>MAP :</h3>
        <br />
        <h5 className="titleContact">Ha Noi:</h5>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9087361445927!2d105.78039851432867!3d21.036337392896858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4abcf6766d%3A0x3d53b16db55e9419!2sIndochina%20Plaza%20Hanoi%20Residences!5e0!3m2!1svi!2s!4v1648734542436!5m2!1svi!2s"></iframe>
        <h5 className="titleContact">Hai Duong:</h5>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.0643945373063!2d106.33102631432715!3d20.949928995842054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359b5ab7cf0249%3A0x9e2daa74d720db5a!2zMjYyIFF1YW5nIFRydW5nLCBQLiBRdWFuZyBUcnVuZywgVGjDoG5oIHBo4buRIEjhuqNpIETGsMahbmcsIEjhuqNpIETGsMahbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1648735286521!5m2!1svi!2sus"></iframe>
      </div>
    </div>
  );
}
