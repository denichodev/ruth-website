import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import AfterworkPagePreview from "./preview-templates/AfterworkPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import WorksPostPreview from "./preview-templates/WorksPostPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("afterwork", AfterworkPagePreview);
CMS.registerPreviewTemplate("works", WorksPostPreview);
