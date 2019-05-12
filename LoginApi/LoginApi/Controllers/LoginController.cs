using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using LoginApi.Models;

namespace LoginApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [Route("Api/Login/createcontact")]
        [HttpPost]
        public object createcontact(Registration Lvm)
        {
            try
            {
                DemologinEntities db = new DemologinEntities();
                Resumemaster Em = new Resumemaster();
                if (Em.UserId == 0)
                {
                    Em.UserName = Lvm.UserName;
                    Em.LoginName = Lvm.LoginName;
                    Em.Password = Lvm.Password;
                    Em.Email = Lvm.Email;
                    Em.ContactNo = Lvm.ContactNo;
                    Em.Address = Lvm.Address;
                    Em.IsApporved = Lvm.IsApporved;
                    Em.Status = Lvm.Status;
                    db.Employeemasters.Add(Em);
                    db.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
    }
}