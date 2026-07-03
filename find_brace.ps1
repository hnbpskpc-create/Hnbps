$lines = Get-Content 'app.js' -Encoding UTF8
$depth = 0
$prevDepth = 0
$inString = $false
$inTemplate = $false
$lineNum = 0

foreach ($line in $lines) {
    $lineNum++
    $prevDepth = $depth
    
    # Simple counting: count { and } in each line (rough, ignores strings)
    for ($i = 0; $i -lt $line.Length; $i++) {
        $ch = $line[$i]
        if ($ch -eq '{') { $depth++ }
        elseif ($ch -eq '}') { $depth-- }
    }
    
    # Report lines where depth changes significantly or goes negative
    if ($depth -lt 0) {
        Write-Host "LINE $lineNum : depth=$depth (NEGATIVE!) : $($line.Substring(0, [Math]::Min(80, $line.Length)))"
    }
}

Write-Host ""
Write-Host "Final depth: $depth (should be 0)"

# Now scan backwards from the end to find where the unclosed brace is
Write-Host ""
Write-Host "=== Scanning for unclosed brace ==="
$depth = 0
for ($ln = $lines.Count - 1; $ln -ge 0; $ln--) {
    $line = $lines[$ln]
    for ($i = $line.Length - 1; $i -ge 0; $i--) {
        $ch = $line[$i]
        if ($ch -eq '}') { $depth++ }
        elseif ($ch -eq '{') { 
            $depth--
            if ($depth -lt 0) {
                $lineNum = $ln + 1
                Write-Host "UNCLOSED BRACE at line $lineNum : $($line.Substring(0, [Math]::Min(100, $line.Length)))"
                exit
            }
        }
    }
}
