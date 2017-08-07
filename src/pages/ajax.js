import jQuery from 'jquery'
import { API_URL } from '../config';
var cabecezaras = new Headers();

export default {
  callbacks: [],
  lastIndexCallback: 0,
  send: function (data) {
    var defaults = {
      // headers: new Headers(),
      url: 'null',
      method: 'GET',
      // dataType: 'json',
      body: null,
      success: this._success,
      successE: this._successE,
      error: this._error,
      timeout: null
    }
    let obj = jQuery.extend({}, defaults, data)
    jQuery.ajax({
      // headers: obj.headers,
      url: API_URL + obj.url,
      method: obj.method,
      dataType: obj.dataType,
      body: obj.body,
      timeout: obj.timeout,
      success: function (r) {
        obj.success(r)
      },
      error: function (xhr, ajaxOptions, thrownError) {
        // obj.error({message: RemoveTag.errorAjax(xhr.responseText), xhr: xhr, ajaxOptions: ajaxOptions, thrownError: thrownError})
        obj.error({message: xhr.responseText, xhr: xhr, ajaxOptions: ajaxOptions, thrownError: thrownError})
      }
    })
  },
  _success: function (result) {

  },
  _successE: function (data) {
    console.log(data)
  },
  _error: function (data) {
    console.log(data)
  }
}
