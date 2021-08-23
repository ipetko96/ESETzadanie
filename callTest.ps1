$ErrorActionPreference = "silentlycontinue"

while ($true) {
    $response = Invoke-RestMethod "http://20.93.203.74/api/ivan" -Method "GET" -Headers $headers -TimeoutSec 1 -StatusCodeVariable "statusCode" -ErrorVariable "badRequest"
    if ($badRequest) {
        Write-Host "!! ERROR !!" -BackgroundColor Red -ForegroundColor Black
        continue
    }
    else {
        Write-Host ($response.hostname, $response.uptime) -Separator " | " -BackgroundColor Green -ForegroundColor Black
        Clear-Variable -Name "response"
    }
    Start-Sleep -Seconds 1
}