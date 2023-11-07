using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace GeoData.Pages
{
    public partial class Index : ComponentBase, IAsyncDisposable
    {
        [Inject]
        public IJSRuntime jSRuntime { get; set; }
        private IJSObjectReference payload { get; set; }
        public string result = string.Empty;  //store map return
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                var client = new HttpClient();
                var geoJson = await client.GetStringAsync("http://localhost:5271/ph.json");
                geoJson = geoJson.Replace('\n', ' ');
                payload = await jSRuntime.InvokeAsync<IJSObjectReference>("import", "./openmap.js");
                if (payload != null)
                {
                    result = await payload.InvokeAsync<string>("loadmap", Convert.ToString(geoJson));
                }
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
