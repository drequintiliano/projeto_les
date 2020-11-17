// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/startbootstrap-freelancer$5.1.3/src/app/views/categorias/cat_servicos.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>PS - Serviços Domésticos</title><link href=vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Montserrat:400,700 rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic rel=stylesheet type=text/css><link href=css/freelancer.min.css rel=stylesheet></head><body id=page-top><nav class=\"navbar navbar-expand-lg text-uppercase fixed-top\" id=mainNav style=\"background-color: #707070\"><div class=container><button class=\"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded\" type=button data-toggle=collapse data-target=#navbarResponsive aria-controls=navbarResponsive aria-expanded=false aria-label=\"Toggle navigation\"><i class=\"fas fa-bars\"></i></button><a class=\"navbar-brand js-scroll-trigger\" href=#page-top>Portal Serv</a><div class=\"collapse navbar-collapse\" id=navbarResponsive><ul class=navbar-nav><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=index.html>Serviços</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=about.html>Sobre</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=contact.html>Ajuda</a></li>");

  if (data.usuarioSessao == undefined) {
    out.w("<li class=\"nav-item mx-0 mx-lg-3\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=login>Entrar</a></li>");
  }

  out.w("</ul></div>");

  if (data.usuarioSessao == undefined) {
    out.w("<button type=button class=\"btn btn-light\"><a href=cadastro.html>Cadastrar</a></button>");
  }

  out.w(" ");

  if (data.usuarioSessao.tipo == 1) {
    out.w("<button type=button class=\"btn btn-light\"><a href=perfil_profissional>Perfil</a></button>");
  }

  if (data.usuarioSessao.tipo == 2) {
    out.w("<button type=button class=\"btn btn-light\"><a href=perfil_cliente>Perfil</a></button> ");
  }

  out.w("</div></nav><section class=\"page-section portfolio\" id=portfolio><div class=container><br><br><br><h2 class=\"page-section-heading text-center mb-0\">Serviços Domésticos</h2><br><br><br>");

  if (data.sucesso) {
    out.w("<div><div id=alertSucesso class=\"alert alert-success alert-dismissible fade show\" role=alert>Solicitação feita com sucesso! <button type=button class=close data-dismiss=alert aria-label=Close><span aria-hidden=true>&times;</span></button></div> </div>");
  }

  out.w("<div class=\"row mx-auto\">");

  var $for$0 = 0;

  marko_forOf(data.servicos, function(servico) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div" +
      marko_attr("id", "servico_" + (servico.id == null ? "" : servico.id)) +
      " class=\"col-xl-6 col-lg-6 col-md-6 col-12 my-2\" data-toggle=modal" +
      marko_attr("data-target", "#modal_" + (servico.id == null ? "" : servico.id)) +
      "><div class=\"row py-3 card-servicos\"><div class=\"col-xl-4 col-lg-4 col-md-12 col-10 mx-auto my-2\" align=center><div><img class=foto-perfil" +
      marko_attr("src", ("img/" + (servico.caminho_img == null ? "" : servico.caminho_img)) + ".jpg") +
      " alt></div></div><div class=\"col-xl-8 col-lg-6 col-md-10 col-10 mx-auto\"><div class=row><h4>" +
      marko_escapeXml(servico.titulo) +
      "</h4></div><div class=\"row text-left\"><p>" +
      marko_escapeXml(servico.descricao) +
      " - Avaliações: <a href=#>" +
      marko_escapeXml(servico.quantidade_avaliacoes) +
      "</a></p></div><div class=\"row \"><p><strong>" +
      marko_escapeXml(servico.celular) +
      "</strong> <br> <strong>" +
      marko_escapeXml(servico.email) +
      "</strong></p></div></div></div></div><div class=\"modal fade\"" +
      marko_attr("id", "modal_" + (servico.id == null ? "" : servico.id)) +
      " tabindex=-1 aria-labelledby=exampleModalLabel aria-hidden=true> ");

    if (data.usuarioSessao != undefined) {
      out.w("<div class=modal-dialog><div class=modal-content><div class=modal-header><h5 class=modal-title id=exampleModalLabel>Solicitar - " +
        marko_escapeXml(servico.titulo) +
        "</h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=modal-body><div style=\"background-color: rgba(26, 188, 156, .2); border-radius: 10px;\" class=text-center><p>Profissional: <strong>" +
        marko_escapeXml(servico.nome) +
        "</strong><br> Pontualidade: <strong>" +
        marko_escapeXml(servico.pontualidade) +
        "</strong> | Qualidade: <strong>" +
        marko_escapeXml(servico.qualidade) +
        "</strong> | Execução: <strong>" +
        marko_escapeXml(servico.execucao) +
        "</strong><br> Quantidade de avaliações: <strong>" +
        marko_escapeXml(servico.quantidade_avaliacoes) +
        "</strong> </p> </div> Avaliações dos clientes:<br>" +
        marko_escapeXml(servico.comentarios) +
        " <br><br> <form action=/cadastrar_solicitacao method=post id=cadastrarSolicitacao> <div class=form-group><label for=data>Selecione uma data: </label><input id=data name=data class=form-control type=date required></div><div class=form-group><label for=hora>Digite uma hora: </label><input id=hora name=hora class=form-control type=time required></div><div class=form-group style=\"display: none;\"><input id=idProfissional name=idProfissional" +
        marko_attr("value", servico.id_profissional) +
        " class=form-control><input id=idCategoria name=idCategoria" +
        marko_attr("value", servico.id_categoria) +
        " class=form-control><input id=idCliente name=idCliente" +
        marko_attr("value", data.usuarioSessao.idUsuario) +
        " class=form-control><input id=idServico name=idServico" +
        marko_attr("value", servico.id) +
        " class=form-control></div><div class=modal-footer><button type=button class=\"btn btn-secondary\" data-dismiss=modal>Cancelar</button><button type=submit class=\"btn btn-primary\">Confirmar</button></div></form> </div> </div></div>");
    } else {
      out.w("<div class=modal-dialog><div class=modal-content><div class=modal-header><h5 class=modal-title id=exampleModalLabel>Solicitar - " +
        marko_escapeXml(servico.titulo) +
        "</h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=modal-body><div style=\"background-color: rgba(26, 188, 156, .2); border-radius: 10px;\" class=text-center><p>Profissional: <strong>" +
        marko_escapeXml(servico.nome) +
        "</strong><br> Pontualidade: <strong>" +
        marko_escapeXml(servico.pontualidade) +
        "</strong> | Qualidade: <strong>" +
        marko_escapeXml(servico.qualidade) +
        "</strong> | Execução: <strong>" +
        marko_escapeXml(servico.execucao) +
        "</strong><br> Quantidade de avaliações: <strong>" +
        marko_escapeXml(servico.quantidade_avaliacoes) +
        "</strong> </p> </div> Avaliações dos clientes:<br>" +
        marko_escapeXml(servico.comentarios) +
        " <br><br> <h5>Para fazer uma solicitação de serviço é preciso estar conectado.<br><br> Faça agora o <a href=/login>Login</a></h5> </div> <div class=modal-footer><button type=button class=\"btn btn-secondary\" data-dismiss=modal>Fechar</button></div></div></div>");
    }

    out.w("</div>");
  });

  out.w(" </div></div></section><div class=\"container pt-5 \"><div class=\"row \"><div class=\"col text-center\"><h3>Apoio</h3></div></div></div><div id=carouselExampleIndicators class=\"carousel slide\" data-ride=carousel><ol class=carousel-indicators><li data-target=#carouselExampleIndicators data-slide-to=0 class=active></li><li data-target=#carouselExampleIndicators data-slide-to=1></li><li data-target=#carouselExampleIndicators data-slide-to=2></li></ol><div class=carousel-inner><div class=\"carousel-item active\"><img class=\"d-block w-100\" src=img/publi/omo_sabao.png alt=\"Primeiro Slide\"></div><div class=carousel-item><img class=\"d-block w-100\" src=img/publi/comfort.png alt=\"Segundo Slide\"></div></div><a class=carousel-control-prev href=#carouselExampleIndicators role=button data-slide=prev><span class=carousel-control-prev-icon aria-hidden=true></span><span class=sr-only>Anterior</span></a><a class=carousel-control-next href=#carouselExampleIndicators role=button data-slide=next><span class=carousel-control-next-icon aria-hidden=true></span><span class=sr-only>Próximo</span></a></div><footer class=\"footer text-center \"><div class=\"container \"><div class=\"row \"><div class=\"col-lg-2 \"><p class=\"lead mt-3 \">Sorocaba - SP</p></div><div class=\"col-lg-8 \"></div><div class=\"col-lg-2 \"><a class=\"btn btn-outline-light btn-social mx-1 \" href=\"# \"><i class=\"fab fa-fw fa-whatsapp \"></i></a><a class=\"btn btn-outline-light btn-social mx-1 \" href=\"# \"><i class=\"fab fa-fw fa-facebook-f \"></i></a></div></div></div></footer><div class=\"scroll-to-top d-lg-none position-fixed \"><a class=\"js-scroll-trigger d-block text-center text-white rounded \" href=\"#page-top \"><i class=\"fa fa-chevron-up \"></i></a></div><script src=\"vendor/jquery/jquery.min.js \"></script><script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js \"></script><script src=\"vendor/jquery-easing/jquery.easing.min.js \"></script><script src=\"js/jqBootstrapValidation.js \"></script><script src=\"js/contact_me.js \"></script><script src=\"js/freelancer.min.js \"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "157");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/startbootstrap-freelancer$5.1.3/src/app/views/categorias/cat_servicos.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
