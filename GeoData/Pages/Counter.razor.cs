using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace GeoData.Pages
{
    public partial class Counter : ComponentBase, IAsyncDisposable
    {
        [Inject]
        public IJSRuntime jSRuntime { get; set; }
        private IJSObjectReference payload { get; set; }
        public string result = string.Empty;  //store map return
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            //if (firstRender)
            //{
            //    payload = await jSRuntime.InvokeAsync<IJSObjectReference>("import", "./bingmap.js");
            //    if (payload != null)
            //    {
            //        result = await payload.InvokeAsync<string>("loadmap");
            //    }
            //}
            if (firstRender)
            {
                await jSRuntime.InvokeVoidAsync("loadmap", null);
            }
        }
        public async ValueTask DisposeAsync()
        {
            if (payload is not null)
            {
                await payload.DisposeAsync();
            }
        }


    }

}
