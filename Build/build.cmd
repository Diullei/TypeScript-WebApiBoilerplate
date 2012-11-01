%SystemRoot%\Microsoft.NET\Framework\v4.0.30319\msbuild.exe ..\AspNetMVCBoilerplate\AspNetMVCBoilerplate.csproj /p:DeployOnBuild=true /p:DeployTarget=PipelinePreDeployCopyAllFilesToOneFolder /p:_PackageTempDir="..\release" /p:AutoParameterizationWebConfigConnectionStrings=false

node "BuildSources\r.js" -o requirejs.build.js

RMDIR ..\release\Scripts /S /Q

rename ..\release\ScriptsTmp Scripts