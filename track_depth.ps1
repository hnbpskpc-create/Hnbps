$lines = Get-Content 'app.js' -Encoding UTF8
$depth = 0
$startLine = 1648

Write-Host "Tracking brace depth from line $startLine..."
Write-Host ""

for ($i = $startLine - 1; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $prevDepth = $depth
    
    for ($j = 0; $j -lt $line.Length; $j++) {
        if ($line[$j] -eq '{') { $depth++ }
        elseif ($line[$j] -eq '}') { $depth-- }
    }
    
    $ln = $i + 1
    
    # Report when depth changes
    if ($depth -ne $prevDepth) {
        $trimmed = $line.Trim()
        if ($trimmed.Length -gt 100) { $trimmed = $trimmed.Substring(0, 100) + "..." }
        
        # Only show when depth goes to 1 (i.e. top-level blocks in setupEventListeners)
        if ($prevDepth -eq 1 -and $depth -eq 2) {
            Write-Host "LINE $ln [depth 1->2] OPEN: $trimmed"
        }
        elseif ($prevDepth -eq 2 -and $depth -eq 1) {
            Write-Host "LINE $ln [depth 2->1] CLOSE: $trimmed"
        }
    }
    
    if ($depth -eq 0) {
        Write-Host ""
        Write-Host "Function closes at line $ln"
        exit
    }
}

Write-Host ""
Write-Host "NEVER CLOSED! Final depth: $depth"
Write-Host ""

# Now find the last point where depth was 1
Write-Host "=== Finding where depth stays at 1 without closing ==="
$depth = 0
$lastDepth1Line = 0

for ($i = $startLine - 1; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $prevDepth = $depth
    
    for ($j = 0; $j -lt $line.Length; $j++) {
        if ($line[$j] -eq '{') { $depth++ }
        elseif ($line[$j] -eq '}') { $depth-- }
    }
    
    $ln = $i + 1
    if ($depth -eq 1 -and $prevDepth -ne 1) {
        $lastDepth1Line = $ln
    }
}

Write-Host "Last time depth returned to 1: line $lastDepth1Line"
