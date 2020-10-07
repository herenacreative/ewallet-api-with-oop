class Response{
  res;
  data;
  result;
  message;
  statusCode;
  statusExecution;

  constructor(res={}, data={}, message="", statusCode=0, statusExecution=""){
      this.res = res;
      this.data = data || "";
      this.message = message;
      this.statusCode = statusCode || 200;
      this.statusExecution = statusExecution === "success" ? "success" : "failed";
      this.response();
  }

  response(){
      if(this.statusExecution === "error"){
          return this.error();
      }
      return this.success();
  }

  success(){
      return this.res.status(this.statusCode).json({
          data: this.data,
          message: this.message,
          statusCode: this.statusCode,
          statusExecution: this.statusExecution
      });
  }

  error(){
      return this.res.status(this.statusCode).json({
          message: this.message,
          statusCode: this.statusCode,
          statusExecution: this.statusExecution
      });
  }
} 

export default Response;