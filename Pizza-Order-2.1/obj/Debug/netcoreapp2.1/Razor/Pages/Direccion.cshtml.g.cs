#pragma checksum "/Users/othon.escandon/Proyectos/tempo/Pizza-Order-2.1/Pizza-Order-2.1/Pages/Direccion.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5a7dfaa1dca769a9fde29a4f904a85cb1b4eabe4"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(Pizza_Order_2._1.Pages.Pages_Direccion), @"mvc.1.0.razor-page", @"/Pages/Direccion.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Pages/Direccion.cshtml", typeof(Pizza_Order_2._1.Pages.Pages_Direccion), null)]
namespace Pizza_Order_2._1.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "/Users/othon.escandon/Proyectos/tempo/Pizza-Order-2.1/Pizza-Order-2.1/Pages/_ViewImports.cshtml"
using Pizza_Order_2._1;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5a7dfaa1dca769a9fde29a4f904a85cb1b4eabe4", @"/Pages/Direccion.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3f3f4a7c27d8b413caf23068855edf4f9d8c0115", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Direccion : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(37, 437, true);
            WriteLiteral(@"

<div id=""map""></div>
<script src=""https://maps.googleapis.com/maps/api/js?key=AIzaSyBTFlKvdKn03PDKaldzMo6gSrm4Ipn0Tic&callback=initMap""
        async defer></script>
<script>

    var map;
    window.onload = initMap();

    function initMap() {
        map = new google.maps.Map(document.getElementById(""map""), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
</script>


");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<DireccionModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<DireccionModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<DireccionModel>)PageContext?.ViewData;
        public DireccionModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591