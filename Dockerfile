FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
RUN curl -sL https://deb.nodesource.com/setup_8.x |  bash -
RUN apt-get install -y nodejs
WORKDIR /src
COPY *.sln ./
COPY src/vuetify-aspnetcore/vuetify-aspnetcore.csproj src/vuetify-aspnetcore/
RUN dotnet restore
COPY . .
WORKDIR /src/src/vuetify-aspnetcore
RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "vuetify-aspnetcore.dll"]
