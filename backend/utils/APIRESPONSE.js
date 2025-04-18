class apiresponse {
    constructor(statuscode,payload,message) {
    this.statuscode = statuscode;
    this.payload = payload;
    this.message = message;
    this.success = statuscode < 400;
       
}
}
export default apiresponse;