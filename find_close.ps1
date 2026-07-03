$lines = Get-Content 'app.js' -Encoding UTF8
$depth = 0
$startLine = 1648

for ($i = $startLine - 1; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    for ($j = 0; $j -lt $line.Length; $j++) {
        if ($line[$j] -eq '{') { $depth++ }
        elseif ($line[$j] -eq '}') { $depth-- }
    }
    
    if ($depth -eq 0) {
        $ln = $i + 1
        Write-Host "setupEventListeners closes at line $ln"
        exit
    }
}

Write-Host "Function NEVER closes! Still at depth $depth after line $($lines.Count)"
