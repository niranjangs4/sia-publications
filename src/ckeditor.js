
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';

import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';     // <--- ADDED
// import MathType from '@wiris/mathtype-ckeditor5/src/plugin';  // <--- ADDED
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
// import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import MathType from '@wiris/mathtype-ckeditor5';



import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Clipboard from  '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Enter from '@ckeditor/ckeditor5-enter/src/enter'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline'
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak'

import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';



import styles from './ckeditor.css';
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
const customColorPalette = [
  {
      color: 'hsl(4, 90%, 58%)',
      label: 'Red'
  },
  {
      color: 'hsl(340, 82%, 52%)',
      label: 'Pink'
  },
  {
      color: 'hsl(291, 64%, 42%)',
      label: 'Purple'
  },
  {
      color: 'hsl(262, 52%, 47%)',
      label: 'Deep Purple'
  },
  {
      color: 'hsl(231, 48%, 48%)',
      label: 'Indigo'
  },
  {
      color: 'hsl(207, 90%, 54%)',
      label: 'Blue'
  },

  // ...
];


const editorConfiguration = {
  plugins: [
    //   Essentials, Bold, Italic, Paragraph, 
    EssentialsPlugin,
    AutoformatPlugin,
    Alignment,  
    Underline,
    Strikethrough,
    Code,
    Subscript,
    Superscript,  
    Autosave, 
    BoldPlugin,
    ItalicPlugin,
    BlockQuotePlugin,
    HeadingPlugin,
    ImagePlugin,
    ImageCaptionPlugin,
    ImageStylePlugin,
    ImageToolbarPlugin,
    EasyImagePlugin,
    ImageUploadPlugin,
    ImageResize,
    LinkPlugin,
    ListPlugin,
    ParagraphPlugin,
    UploadAdapterPlugin,
    Base64UploadAdapter,
    Clipboard,
    Enter,
    HorizontalLine,
    Table, TableToolbar, TableProperties, TableCellProperties, CKFinder,
    // Mathematics
                                                    // <--- ADDED
   MathType  ,    
    Font,
    Highlight,
    Indent, IndentBlock,
    Mention,
    PasteFromOffice,
    RemoveFormat,
    PageBreak,
],
  toolbar: [
    
    'heading',
    '|',
    'alignment', 'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor',
  'bold',
  'italic',
  'underline', 'strikethrough', 'code', 'subscript',
			'superscript', 'removeFormat',
  'link',
  'bulletedList',
  'numberedList',
  'imageUpload',
  'blockQuote',
  'undo',
  'redo', 
  "paragraph",
  
  'highlight',
  'indent', 'outdent','mediaEmbed', 'insertTable', 'enter','horizontalLine','pageBreak','tableToolbar','MathType', 'ChemType',
],
// ckfinder: {
//   // Upload the images to the server using the CKFinder QuickUpload command.
//   // uploadUrl: 'file:///C:/Users/Niranjan/Pictures/Screenshots/',

//   // Define the CKFinder configuration (if necessary).
//   options: {
//       resourceType: 'Images'
//   },
//   // openerMethod: 'popup'
// },
  image: {
    toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        'imageStyle:alignLeft',
        'imageStyle:alignRight',
        'imageTextAlternative'
    ],
    styles: [
      // This option is equal to a situation where no style is applied.
      'full',

      // This represents an image aligned to the left.
      'alignLeft',

      // This represents an image aligned to the right.
      'alignRight'
  ]
},
indentBlock: {
  offset: 1,
  unit: 'em'
},
language: 'en',

table: {
  contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells',
  'tableProperties', 'tableCellProperties', ],
  tableToolbar: [ 'bold', 'italic' ],
  tableProperties: {
    borderColors: customColorPalette,
    backgroundColors: customColorPalette
},

// Set the palettes for table cells.
tableCellProperties: {
    borderColors: customColorPalette,
    backgroundColors: customColorPalette
      }
    },

config: {
			ui: {
				width: '500px',
				height: '300px'
			}
		}    
};


export default editorConfiguration ;