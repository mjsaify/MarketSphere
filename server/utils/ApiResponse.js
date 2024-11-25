class ApiResponse {
    constructor(statusCode, data, message = "success") {
        this.statusCode = statusCode;
        this.message = message;
        this.success = true;
        this.data = data;
    };
};
export default ApiResponse;