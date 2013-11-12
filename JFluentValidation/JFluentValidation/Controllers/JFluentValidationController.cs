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

        public ActionResult IsDate()
        {
            var viewModel = new AuthenticationModel();
            return View(viewModel);
        }

        public ActionResult IsPastDate()
        {
            var viewModel = new AuthenticationModel();
            return View(viewModel);
        }

        public ActionResult NotEqual()
        {
            return View();
        }

        public ActionResult NotEqualWithCondition()
        {
            return View();
        }

        public ActionResult Equal()
        {
            return View();
        }

        public ActionResult EqualWithCondition()
        {
            return View();
        }
    }
}