import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
  getValueDosen,
  getValueMahasiswa,
  getValueRuangan,
} from "https://bukulapak.github.io/element/process.js";
import {
  urlPOST,
  urlPOSTDosen,
  urlPOSTMahasiswa,
  urlPOSTRuangan,
  AmbilResponse,
  AmbilResponseDosen,
  AmbilResponseMahasiswa,
  AmbilResponseRuangan,
} from "../config/url_post.js";

function pushData() {
  let data = {
    time: {
      jam: getValue("jam"),
      hari: getValue("hari"),
      tanggal: getValue("tanggal"),
    },
    lokasi: getValue("lokasi"),
    walidosen: {
      nama: getValue("nama"),
      jabatan: getValue("jabatan"),
    },
    biodata: {
      nama: getValue("nama"),
      phone_number: getValue("phone_number"),
      jurusan: getValue("jurusan"),
    },
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);

function pushDatadosen() {
  let datadosen = {
    nama: getValueDosen("nama"),
    jabatan: getValueDosen("jabatan"),
  };
  postData(urlPOSTDosen, datadosen, AmbilResponseDosen);
}

onClick("button", pushDatadosen);

function pushDatamahasiswa() {
  let datamahasiswa = {
    nama: getValueMahasiswa("nama"),
    phone_number: getValueMahasiswa("phone_number"),
    jurusan: getValueMahasiswa("jurusan"),
  };
  postData(urlPOSTMahasiswa, datamahasiswa, AmbilResponseMahasiswa);
}

onClick("button", pushDatamahasiswa);

function pushDataruangan() {
  let dataruangan = {
    lokasi_ruangan: getValueRuangan("lokasi_ruangan"),
  };
  postData(urlPOSTRuangan, dataruangan, AmbilResponseRuangan);
}

onClick("button", pushDataruangan);
