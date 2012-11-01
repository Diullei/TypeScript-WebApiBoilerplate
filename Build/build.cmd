%SystemRoot%\Microsoft.NET\Framework\v4.0.30319\msbuild.exe ..\AspNetMVCBoilerplate\AspNetMVCBoilerplate.csproj /p:DeployOnBuild=true /p:DeployTarget=PipelinePreDeployCopyAllFilesToOneFolder /p:_PackageTempDir="..\release" /p:AutoParameterizationWebConfigConnectionStrings=false

node "BuildSources\r.js" -o requirejs.build.js
node BuildSources\less\bin\lessc.js ..\release\Content\bootstrap\less\bootstrap.less > ..\release\Content\bootstrap\less\bootstrap.css --yui-compress

RMDIR ..\release\Scripts /S /Q

rename ..\release\ScriptsTmp Scripts

(for /d %A in (..\release\Content\bootstrap\less) do @for /d %B in ("%A\*") do @rd /s /q "%~B")&del /s /q *.less >nul

(for /d %A in (..\release\Scripts) do @for /d %B in ("%A\*") do @rd /s /q "%~B")&del /s /q *.ts >nul

RMDIR ..\release\Scripts\d.ts /S /Q
