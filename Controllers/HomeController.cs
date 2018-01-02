using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.Prerendering;

namespace Vuetify.AspNetCore.Controllers
{
    public class HomeController : Controller
    {
        private readonly ISpaPrerenderer prerenderer;

        public HomeController(ISpaPrerenderer prerenderer)
        {
            this.prerenderer = prerenderer;
        }

        public IActionResult Index()
        {
            // var html = await prerenderer.RenderToString("ClientApp/renderOnServer");
            // return Content(html.Html, "text/html; charset=UTF-8");
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
