<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>E-waste Collect</title>

    {{-- Include core + vendor Styles --}}
    @include('panels/styles')
</head>

<body>
    <!-- BEGIN: Content-->
    <div id="app"></div>
    <!-- End: Content-->

    {{-- include default scripts --}}
    @include('panels/scripts')
</body>

</html>
