import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import base_path from "lume/plugins/base_path.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx from "lume/plugins/jsx.ts";
import date from "lume/plugins/date.ts";
import parcel_css from "lume/plugins/parcel_css.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";

const site = lume();

site.ignore("README.md", "CHANGELOG.md", "node_modules");
site.use(attributes());
site.use(base_path());
site.use(code_highlight());
site.use(jsx());
site.use(date());
site.use(parcel_css());
site.use(postcss());
site.use(terser());
site.copy("img");
site.copy("site.webmanifest");
site.copy("CNAME");

export default site;
