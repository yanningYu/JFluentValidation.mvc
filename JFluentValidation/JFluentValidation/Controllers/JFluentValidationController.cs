using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JFluentValidation.Models;

namespace JFluentValidation.Controllers
{
    public class JFluentValidationController : Controller
    {
        //
        // GET: /JFluentValidation/

        public ActionResult NotNull()
        {
            var viewModel = new AuthenticationModel();
            return View(viewModel);
        }

        public ActionResult NotNullWithCondition()
        {
            var viewModel = new AuthenticationModel();
            return View(viewModel);
        }

    }
}
