import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit_mahasiswa.js";
import { urlFetch } from "./config/url_get_detail.js";

get(urlFetch, isiData);
