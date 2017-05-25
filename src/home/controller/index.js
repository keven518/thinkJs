'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    let username = '柯文';
    let model = this.model('user');
    let data = await model.select();
    return this.json(data);

    this.assign({
      username
    })


    // return this.display();
  }
}