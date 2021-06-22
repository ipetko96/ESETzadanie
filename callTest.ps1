while ($true) {
    $response = Invoke-RestMethod 'http://localhost:3000/api/ivan' -Method 'GET' -Headers $headers
    "$($response.hostname) | $($response.uptime)"
    Start-Sleep -Seconds 1
}