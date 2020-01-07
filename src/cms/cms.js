import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import AfterworkPagePreview from "./preview-templates/AfterworkPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import WorksPostPreview from "./preview-templates/WorksPostPreview";
import AfterworksPostPreview from "./preview-templates/AfteworksPostPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("afterwork", AfterworkPagePreview);
CMS.registerPreviewTemplate("works", WorksPostPreview);
CMS.registerPreviewTemplate("afterworks", AfterworksPostPreview);
