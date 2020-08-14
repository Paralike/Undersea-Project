#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Undersea.API/Undersea.API.csproj", "Undersea.API/"]
COPY ["Undersea.BLL/Undersea.BLL.csproj", "Undersea.BLL/"]
COPY ["Undersea.DAL/Undersea.DAL.csproj", "Undersea.DAL/"]
RUN dotnet restore "Undersea.API/Undersea.API.csproj"
COPY . .
WORKDIR "/src/Undersea.API"
RUN dotnet build "Undersea.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Undersea.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Undersea.API.dll"]