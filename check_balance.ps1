$content = Get-Content 'app.js' -Raw -Encoding UTF8

$openBrace = ([regex]::Matches($content, '\{')).Count
$closeBrace = ([regex]::Matches($content, '\}')).Count
$openParen = ([regex]::Matches($content, '\(')).Count  
$closeParen = ([regex]::Matches($content, '\)')).Count
$openBrack = ([regex]::Matches($content, '\[')).Count
$closeBrack = ([regex]::Matches($content, '\]')).Count

Write-Host "=== Bracket Balance Check ==="
Write-Host "Braces { }: open=$openBrace close=$closeBrace diff=$($openBrace - $closeBrace)"
Write-Host "Parens ( ): open=$openParen close=$closeParen diff=$($openParen - $closeParen)"
Write-Host "Brackets [ ]: open=$openBrack close=$closeBrack diff=$($openBrack - $closeBrack)"

# Count backtick template literals
$backticks = ([regex]::Matches($content, '`')).Count
Write-Host "Backticks: $backticks (should be even: $($backticks % 2 -eq 0))"

Write-Host ""
Write-Host "=== Total Lines ==="
$lines = (Get-Content 'app.js').Count
Write-Host "Total lines: $lines"
