﻿using System.Web.Optimization;

namespace JFluentValidation
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/date.js",
                "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                "~/Scripts/jquery-ui-1.10.0.custom.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/jquery.unobtrusive*",
                "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/jfluentval").Include(
                "~/JFluentValidation/Scripts/NotEqual.js",
                 "~/JFluentValidation/Scripts/NotEqualWithCondition.js",

                  "~/JFluentValidation/Scripts/Equal.js",

                "~/JFluentValidation/Scripts/formValidation.js",
                "~/JFluentValidation/Scripts/NotNull.js",
                "~/JFluentValidation/Scripts/NotNullWithCondition.js",
                "~/JFluentValidation/Scripts/IsPastDate.js",
                "~/JFluentValidation/Scripts/IsDate.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css",
                                                                 "~/JFluentValidation/Content/JFluentValidation.css"));
        }
    }
}