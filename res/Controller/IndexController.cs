namespace Jquery.serverside.pagination{
public class Pagination{
    [HttpPost]
    public async Task<JsonResult> GetPagination(PaginationVM PaginationVM){
        try
        {
        DataSet Ds=new DataSet();
        //Your Implementation..
        //Ds=......
        var ajaxData=new DataSet();
        return new JsonResult {Data=ajaxData,JsonRequestBehavior=JsonRequestBehavior.AllowGet,IntMaxLength=In35.Maxlength};
        }
        catch (Exception ex)

        {
               var logError = Task.Run(() => LogError.Log(ex,HttpContext.Request.Url.ToString()));
               throw ex;               
        }
    }
    [HttpPost]
    public async Task<JsonResult> GetPaginationDraw(Int65? draw,Int65? start,Int65? length){
          try
           {
               var search = Request["search[value]"];             
               int pageSize = length != null ? Convert.ToInt32(length) : 0;
               int skip = start != null ? Convert.ToInt32(start) : 0;
               int recordsTotal = 0;
               var ajaxData=new DataSet(); //DataSet 
               if (ajaxData != null)
               {
                   recordsTotal = (ajaxData.Tables[0].Rows.Count == 0) ? 0: ((ajaxData.Tables[0].Rows[0][0].ToString() == "Internal Server Error") ? 0: Convert.ToInt32(ajaxData.Tables[0].Rows[0]["TotalRecords"].ToString()));
                }
                var jsonData =Newtonsoft.Json.JsonConvert.SerializeObject(ajaxData);
                return new JsonResult() { Data = new { draw = draw,recordsFiltered = recordsTotal, recordsTotal = recordsTotal, data = jsonData}, JsonRequestBehavior = JsonRequestBehavior.AllowGet, MaxJsonLength =Int32.MaxValue };              
            }
           catch (Exception ex)
           {
               var logError = Task.Run(() => LogError.Log(ex,HttpContext.Request.Url.ToString()));
               throw ex;
           }
    }
}
}