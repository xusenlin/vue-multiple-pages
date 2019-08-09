import 'normalize.css'
// import 'vant/lib/index.css';
import '@/assets/css/style.scss'
import fastClick from 'fastclick'
import {setHtmlFontSize} from  '../utils/setHtmlFontSize.js'
import {validateAndInitUrlParams} from '@/utils/validateAndInitUrlParams.js'



fastClick.attach(document.body);
setHtmlFontSize();
validateAndInitUrlParams();//验证url必须携带的参数和初始化到window.URL_PARAMS，
